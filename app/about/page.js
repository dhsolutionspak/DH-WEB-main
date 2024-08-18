import CounterUp from '@/components/elements/CounterUp'
import ResizeContainer from '@/components/elements/ResizeContainer'
import VideoPopup from '@/components/elements/VideoPopup'
import Layout from "@/components/layout/Layout"
import NewsSlider from '@/components/slider/NewsSlider'
import OfficeSlider from '@/components/slider/OfficeSlider'
import Team2Slider from '@/components/slider/Team2Slider'
import Link from 'next/link'
import FullPageVideo from '@/components/FullPageVideo'; // Import the FullPageVideo component

export default function About() {
    return (
        <>
            <ResizeContainer />
            <Layout headerStyle={1} footerStyle={1} headerCls="header-style-2 header-style-4">
                {/* FullPageVideo Section */}
                <FullPageVideo />

                {/* Existing Sections */}
                <section className="section-box box-about-section-1">
                    <div className="container-fluid">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="padding-left-auto">
                                    <Link className="btn btn-tag-black" href="#">About Us</Link>
                                    <h2 className="display-2 mt-15 mb-25">This is Who We Are</h2>
                                    <p className="text-xl mb-45">
                                        The true secret of our success lies in people behind the screen.
                                        And with them, our culture.
                                    </p>
                                    <div className="box-buttons-feature-4">
                                        <Link className="btn btn-brand-4-medium mr-20" href="#">
                                            Subscribe
                                            <svg width={22} height={8} viewBox="0 0 22 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M22 3.99934L18.4791 0.478516V3.30642H0V4.69236H18.4791V7.52031L22 3.99934Z" fill="true" />
                                            </svg>
                                        </Link>
                                        <Link className="btn btn-learmore-2" href="#">
                                            <span>
                                                <svg width={39} height={38} viewBox="0 0 39 38" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <rect x="0.5" width={38} height={38} rx={19} fill="#191919" />
                                                    <g clipPath="url(#clip0_1_376)">
                                                        <path d="M24.1537 16.8139L15.218 25.7497L13.75 24.2817L22.6847 15.3459H14.81V13.2695H26.2301V24.6897H24.1537V16.8139Z" fill="#C5FF55" />
                                                    </g>
                                                    <defs>
                                                        <clipPath id="clip0_1_376">
                                                            <rect width={13} height={13} fill="white" transform="translate(13.5 13)" />
                                                        </clipPath>
                                                    </defs>
                                                </svg>
                                            </span>
                                            Learn More
                                        </Link>
                                    </div>
                                    <div className="box-border-left-author">
                                        <p className="text-22-bold">We facilitate the creation of strategy, design, and implementation</p>
                                        <div className="box-joined">
                                            <div className="box-authors">
                                                <span className="item-author"><img src="/assets/imgs/page/homepage1/author.png" alt="Nivia" /></span>
                                                <span className="item-author"><img src="/assets/imgs/page/homepage1/author2.png" alt="Nivia" /></span>
                                                <span className="item-author"><img src="/assets/imgs/page/homepage1/author3.png" alt="Nivia" /></span>
                                                <span className="item-author"><span className="text-num-author text-md-bold color-brand-2">+2k</span></span>
                                            </div>
                                            <span className="text-lg d-inline-block">Join thousands of users in using<br className="d-none d-md-block" />the Nivia platform!</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="box-image-square"><img src="/assets/imgs/page/about/img-about.png" alt="Nivia" /></div>
                            </div>
                        </div>
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="box-image-rect box-image-rect-both"><img src="/assets/imgs/page/about/img-about2.png" alt="Nivia" /></div>
                            </div>
                            <div className="col-lg-6">
                                <div className="padding-right-auto">
                                    <div className="box-padding-left-50 box-padding-right-50">
                                        <div className="strate-icon"><span /> Strategies that work</div>
                                        <h2 className="heading-2 mb-20">Track the progress towards objectives with key results</h2>
                                        <p className="text-lg neutral-700">Nivia is an independent web design studio with a rich history. Founded in 1999, it gathered the best web designers and developers.</p>
                                        <div className="row mt-50">
                                            <div className="col-xl-6 col-lg-12 col-sm-6">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/discover.svg" /></div>
                                                    <div className="card-info"><Link href="#">
                                                        <h3 className="text-22-bold">Web and App design premium tools</h3>
                                                    </Link></div>
                                                </div>
                                            </div>
                                            <div className="col-xl-6 col-lg-12 col-sm-6">
                                                <div className="card-feature-2">
                                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/keep.svg" /></div>
                                                    <div className="card-info"><Link href="#">
                                                        <h3 className="text-22-bold">Leading Brand Building expert</h3>
                                                    </Link></div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>

                {/* Other Sections Here */}
                
                <section className="section-box box-prepared-section">
                    <div className="container">
                        <div className="row align-items-end">
                            <div className="col-lg-6 mb-30">
                                <h2 className="heading-2">When you are more prepared, your future will be brighter</h2>
                            </div>
                            <div className="col-lg-6 mb-30">
                                <h6 className="neutral-500">Since 2010 we’ve been working with amazing organisations to create meaningful impact and compelling experiences.</h6>
                            </div>
                        </div>
                        <div className="row mt-45">
                            <div className="col-lg-4">
                                <div className="card-feature-2 card-feature-list">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/marketing.svg" /></div>
                                    <div className="card-info"><Link href="#">
                                        <h3 className="text-22-bold">Our philosophy</h3>
                                        <p className="text-lg neutral-500">We also know that with all our wellness initiatives, customer value and service, our doors to the community.</p>
                                    </Link></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-feature-2 card-feature-list">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/digital.svg" /></div>
                                    <div className="card-info"><Link href="#">
                                        <h3 className="text-22-bold">Our Mission</h3>
                                        <p className="text-lg neutral-500">Our mission, and our vision, is our mission. We are here to support and encourage individuals in their journey.</p>
                                    </Link></div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="card-feature-2 card-feature-list">
                                    <div className="card-image"><img src="/assets/imgs/page/homepage3/product.svg" /></div>
                                    <div className="card-info"><Link href="#">
                                        <h3 className="text-22-bold">Our Values</h3>
                                        <p className="text-lg neutral-500">Our values guide us and define who we are, how we work, and how we make decisions.</p>
                                    </Link></div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Layout>
        </>
    )
}
