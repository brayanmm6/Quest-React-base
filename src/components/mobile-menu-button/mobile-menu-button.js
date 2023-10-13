import "./mobile-menu-button.css"

const MobileMenuButton = () => {
    return(
        <>
            <input type="checkbox" id="mobile-menu-checkbox"></input>
            <label htmlFor="mobile-menu-checkbox" className="mobile-menu-label">
                <div className="square"><span className="line"></span></div>
            </label>
        </>
    )
}

export { MobileMenuButton }