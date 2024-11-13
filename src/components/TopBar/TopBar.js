import './topBar.scss';

const TopBar = () => {
    return (
        <section class="result">
            <div class="container">
            <div class="row">
                <div class="col-12 col-md-9 col-lg-8">
                <div class="result__items justify-content-between">
                    <div class="result__item result__item_first">
                    01. Toolbox Selection
                    </div>
                    <div class="result__delimiter flex-fill"></div>
                    <div class="result__item result__item_second">
                    02. Accessorie Selection
                    </div>
                    <div class="result__delimiter flex-fill"></div>
                    <div class="result__item result__item_last">
                    03. Summary
                    </div>
                </div>
                </div>
                <div class="col-3 col-lg-4 d-none d-md-block">
                <div class="result__total-item d-flex justify-content-end">
                    <p><span>0</span> item added</p>
                </div>
                </div>
            </div>
            </div>
        </section>
    );
}

export default TopBar;