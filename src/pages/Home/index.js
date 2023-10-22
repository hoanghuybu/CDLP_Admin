import './Home.scss';
import images from '~/assets/images';
import { BiDotsVerticalRounded, BiUpArrowAlt, BiDollar, BiMobileAlt, BiCloset, BiHomeAlt } from 'react-icons/bi';
import DashBoard from '~/components/Dashboard';
import GrowChart from '~/components/Dashboard/GrowChart';
import OrderStatisticsChart from '~/components/Dashboard/OrderStatisticsChart';

function Home() {
    return (
        <div className="content-wrapper">
            <div className="container-xxl flex-grow-1 container-p-y">
                <div className="row">
                    <div className="col-lg-8 mb-4 order-0">
                        <div className="card">
                            <div className="d-flex align-items-end row">
                                <div className="col-sm-7">
                                    <div className="card-body">
                                        <h5 className="card-title text-primary">Welcome Admin! 🎉</h5>
                                        <p className="mb-4">
                                            Your Page have <span className="fw-bold">56%</span> accept post today. Check
                                            post and user.
                                        </p>
                                    </div>
                                </div>

                                <div className="col-sm-5 text-center text-sm-left">
                                    <div className="card-body pb-0 px-0 px-md-4">
                                        <img src={images.CDLP_logo} height="140" width="100%" alt="CDLP logo" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 order-1">
                        <div className="row">
                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img
                                                    src={images.chartSuccess}
                                                    alt="chart success"
                                                    className="rounded"
                                                />
                                            </div>
                                            <div className="dropdown">
                                                <button
                                                    className="btn p-0"
                                                    type="button"
                                                    id="cardOpt3"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <BiDotsVerticalRounded />
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="cardOpt3">
                                                    <a className="dropdown-item" href="/">
                                                        View More
                                                    </a>
                                                    <a className="dropdown-item" href="/">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="fw-semibold d-block mb-1">Post</span>
                                        <h3 className="card-title mb-2">500 Bài</h3>
                                        <small className="text-success fw-semibold">
                                            <BiUpArrowAlt /> +72.80%
                                        </small>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-md-12 col-6 mb-4">
                                <div className="card">
                                    <div className="card-body">
                                        <div className="card-title d-flex align-items-start justify-content-between">
                                            <div className="avatar flex-shrink-0">
                                                <img src={images.walletInfo} alt="chart success" className="rounded" />
                                            </div>
                                            <div className="dropdown">
                                                <button
                                                    className="btn p-0"
                                                    type="button"
                                                    id="cardOpt3"
                                                    data-bs-toggle="dropdown"
                                                    aria-haspopup="true"
                                                    aria-expanded="false"
                                                >
                                                    <BiDotsVerticalRounded />
                                                </button>
                                                <div className="dropdown-menu" aria-labelledby="cardOpt3">
                                                    <a className="dropdown-item" href="/">
                                                        View More
                                                    </a>
                                                    <a className="dropdown-item" href="/">
                                                        Delete
                                                    </a>
                                                </div>
                                            </div>
                                        </div>
                                        <span className="fw-semibold d-block mb-1">Sales</span>
                                        <h3 className="card-title mb-2">4,679 VND</h3>
                                        <small className="text-success fw-semibold">
                                            <BiUpArrowAlt /> +28.42%
                                        </small>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-lg-12 order-2 order-md-3 order-lg-2 mb-4">
                        <div className="card">
                            <div className="row row-bordered g-0">
                                <div className="col-md-8">
                                    <h5 className="card-header m-0 me-2 pb-3">Total Revenue</h5>
                                    <DashBoard />
                                </div>
                                <div className="col-md-4">
                                    <div className="card-body">
                                        <div className="text-center">
                                            <button
                                                class="btn btn-sm btn-outline-primary"
                                                type="button"
                                                id="growthReportId"
                                                data-bs-toggle="dropdown"
                                                aria-haspopup="true"
                                                aria-expanded="false"
                                            >
                                                2022
                                            </button>
                                        </div>
                                    </div>
                                    <GrowChart />
                                    <div class="text-center fw-semibold pt-3 mb-2">62% Company Growth</div>
                                    <div className="d-flex px-xxl-4 px-lg-2 p-4 gap-xxl-3 gap-lg-1 gap-3 justify-content-between">
                                        <div className="d-flex">
                                            <div class="me-2">
                                                <span className="badge bg-label-primary p-2">
                                                    <BiDollar className="text-primary" />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small>2022</small>
                                                <h6 className="mb-0">$32.5k</h6>
                                            </div>
                                        </div>
                                        <div className="d-flex">
                                            <div className="me-2">
                                                <span class="badge bg-label-primary p-2">
                                                    <BiDollar className="text-primary" />
                                                </span>
                                            </div>
                                            <div className="d-flex flex-column">
                                                <small>2022</small>
                                                <h6 className="mb-0">$32.5k</h6>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-12 col-md-8 col-lg-12  order-3 order-md-2">
                        <div className="card h-100">
                            <div className="card-header d-flex align-items-center justify-content-between pb-0">
                                <div className="card-title mb-0">
                                    <h5 className="m-0 me-2">Order Statistics</h5>
                                    <small className="text-muted">42.82k Total Sales</small>
                                </div>
                            </div>
                            <div className="card-body">
                                <div className="d-flex justify-content-center align-items-center mb-3">
                                    <div className="d-flex flex-column align-items-center gap-1">
                                        <h2 className="mb-2">8,258</h2>
                                        <span>Total Orders</span>
                                    </div>
                                    <OrderStatisticsChart />
                                </div>
                                <ul className="p-0 m-0">
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-primary">
                                                <BiMobileAlt />
                                            </span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-start gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Post</h6>
                                                <small className="text-muted">Gift</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold">82.5k</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex mb-4 pb-1">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-success">
                                                <BiCloset />
                                            </span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-start gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Post</h6>
                                                <small className="text-muted">Product</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold">23.8k</small>
                                            </div>
                                        </div>
                                    </li>
                                    <li className="d-flex">
                                        <div className="avatar flex-shrink-0 me-3">
                                            <span className="avatar-initial rounded bg-label-info">
                                                <BiHomeAlt />
                                            </span>
                                        </div>
                                        <div className="d-flex w-100 flex-wrap align-items-center justify-content-start gap-2">
                                            <div className="me-2">
                                                <h6 className="mb-0">Post</h6>
                                                <small className="text-muted">Service</small>
                                            </div>
                                            <div className="user-progress">
                                                <small className="fw-semibold">849k</small>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
