import './topBar.scss';

const TopBar = () => {
    return (
        <section className="result">
            <div className="container">
            <div className="row">
                <div className="col-12 col-md-9 col-lg-8">
                <div className="result__items justify-content-between">
                    <div className="result__item result__item_first">
                    01. Toolbox Selection
                    </div>
                    <div className="result__delimiter flex-fill"></div>
                    <div className="result__item result__item_second">
                    02. Accessorie Selection
                    </div>
                    <div className="result__delimiter flex-fill"></div>
                    <div className="result__item result__item_last">
                    03. Summary
                    </div>
                </div>
                </div>
                <div className="col-3 col-lg-4 d-none d-md-block">
                <div className="result__total-item d-flex justify-content-end">
                    <p><span>0</span> item added</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default TopBar;