import React, { useContext } from 'react'
import { LoaderIcon } from '../../utils/icons.utils'
import AppContext from '../../store/AppContext'
const AppLoader = (props) => {
    const state = useContext(AppContext)
    // useEffect(() => {
    //     setTimeout(() => {
    //         state.contextReducer({ type: 'loading', loading: false });
    //     }, 3000);
    // });
    return (
        <>
            {
                state.AppData.loading &&
                    <div className="main__loader">
                        <div className="wrap__loader-ui">
                            <LoaderIcon className="apploader-icon" width={160} height={160} />
                        </div>
                    </div>
            }
            {props.children}
        </>
    )
}

export default AppLoader