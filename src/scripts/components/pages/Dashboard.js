import React, { useContext, useEffect, useRef, useState } from 'react'
import AppContext from '../../store/AppContext'
import { getLocaleString } from '../../utils/dom.utils'
import { LoaderIcon } from '../../utils/icons.utils'
const male = process.env.PUBLIC_URL + '/images/male.png'
const female = process.env.PUBLIC_URL + '/images/female.png'

const Dashboard = () => {
    const _url = 'https://randomuser.me/api/?results=20&inc=gender,name,dob,picture'
    const _payload = { method: 'GET', headers: { Accept: 'application/json' }}
    
    const state = useContext(AppContext)
    
    const [loaderState, setLoaderState] = useState(true)
    const [list, setList] = useState([])
    const [shouldFetch, setShouldFetch] = useState(true)
    const [showError, setError] = useState(false)
    
    const observer = useRef()
    // const scrollDownRef = useRef(null)

    let delayInCb = null;

    // const scrollToBottom = () => {
    //     scrollDownRef?.current?.scrollIntoView({ behavior: "smooth", block: "end" })
    // }

    useEffect(() => {
        // if(loaderState) scrollToBottom()
        if (shouldFetch && !showError) {
            fetchPeople()
        }
    }, [/*loaderState,*/ shouldFetch, showError])   

    const lastItemRef = React.useCallback(
        (node) => {
            if (loaderState) return
            if (observer.current) observer.current.disconnect()
        
            observer.current = new IntersectionObserver(([entry]) => {
                if (entry.isIntersecting) {
                    if (entry.intersectionRatio >= 0.1) {
                        setShouldFetch(true)
                    } else {
                        setShouldFetch(false)
                    }
                }
            }, {delay: 1000, threshold: 0})
        
            if (node) observer.current.observe(node)
        },
        [loaderState]
    );

    const logoutHandler = () => {
        state.contextReducer({ type: 'signOut' })
    }

    const loadMoreHandler = (ev) => {
        setError(false)
        fetchPeople()
    }

    const fetchPeople = () => {
        setShouldFetch(false)
        setLoaderState(true)
        fetch(_url, _payload)
            .then(response => response.json())
            .then(parsedData => {
                let { results } = parsedData
                if (results instanceof Array && results.length > 0) {
                    let listArr = [...list, ...results]
                    setList(listArr)
                }
                setLoaderState(false)
            })
            .catch(error => {
                setLoaderState(false)
                setError(true)
            })
    }
    
    return (
        <main className="main__viewport">
            <main className="main__app">
                <section className="section__dashboard">
                    <header className="dashboard-header">
                        <h1 className="db-title">Discover People</h1>
                        <button onClick={logoutHandler} className="comn-btn btn_comn-style logout-btn">Logout</button>
                    </header>
                    <section className="people-list-wrap">
                        <ul  className="people-list">
                            {
                                list.map((item, index) =>
                                    index + 1 === list.length ? (
                                    <Item reference={lastItemRef} key={index}>
                                        <ItemUi item={item} />
                                    </Item>
                                    ) : (
                                    <Item key={index}>
                                        <ItemUi item={item} />
                                    </Item>
                                    )
                                )
                            }
                        </ul>
                        {
                            showError &&
                            <div className="wrap__loader-more">
                                <p className="load-error-para">Failed to load data. Please try again.</p>
                                <button className="btn_comn-style btn__load-more" onClick={loadMoreHandler}>Load More</button>
                            </div>
                        }
                        {
                            // ref={scrollDownRef}
                            loaderState &&
                            <div className="wrap__form-loader">
                                <div className="loader-shield">
                                    <LoaderIcon className={'dl-blk'} />
                                </div>
                            </div>
                        }
                    </section>
                </section>
            </main>
        </main>
    )
}

const Item = ({ children, reference }) => {
    return (
        <li ref={reference} className="list-item">
            {children}
        </li>
    );
};

const ItemUi = ({ item }) => {
    let isfemale = item.gender === 'female',
        genderClass = isfemale ? 'female' : 'male',
        firstName = item.name.first ? item.name.first + ' ' : '',
        lastName = item.name.last ? item.name.last : '',
        dob = getLocaleString(item.dob.date),
        imgSrc = item.picture.medium ? item.picture.medium : isfemale ? female : male
    return (
        <div className="item-inner">
            <div className="item-desc">
                <p className="item-para">
                    <span className="item-name">{ `${firstName}${lastName}` }</span>
                    <span className={`item-gender gender-${genderClass}`}><span>{ isfemale ? 'F' : 'M' }</span></span>
                </p>
                <p className="item-dob">{ dob }</p>
            </div>
            <span className="item-icon">
                <img src={imgSrc} />
            </span>
        </div>
    )
}

export default Dashboard