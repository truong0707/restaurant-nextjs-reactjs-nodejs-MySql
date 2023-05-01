import Head from 'next/head'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import MasterLayout from '@/components/MasterLayoutPage'
import Slider from "react-slick";
import Footer from '@/components/Footer/Footer';
import "../../node_modules/slick-carousel/slick/slick.css";
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import styles from '@/styles/Home.module.css'
import { useSelector } from 'react-redux';
import { StateStore } from './login';

const inter = Inter({ subsets: ['latin'] });



export default function Home() {
  const userDataLocal = useSelector((state: StateStore) => state.useDataLocal);
  const { userInfoLocal } = userDataLocal;


  var settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1124,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      },
    ]
  };

  const data = [
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/85d/700_9999_1/85dbc36067a19873a842761cc5f3a8d7.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/dcc/700_9999_1/dcc4459f90e0ee7a9c4a462faf6c0c4b.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/572/700_9999_1/572fa86f2285617fe047a6d55c310916.jpg" },
    { src: "https://mamuka.rest/upload/resize_cache/iblock/e04/700_9999_1/e0439b48d92d72a720d2082a457022e9.jpg" },
    { src: "https://mamuka.rest/upload/iblock/37a/37a00b3eeb558112ba1f7880171b0750.jpg" },
  ]
  return (
    <>
      <Head>
        <title>Home Page</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div>
        <MasterLayout>
          {/* <CC/> */}
          <div>
            <div className={styles.wrap_home}>
              <img className={styles.main_img} src="https://images.squarespace-cdn.com/content/v1/53883795e4b016c956b8d243/1551438228969-H0FPV1FO3W5B0QL328AS/chup-anh-thuc-an-1.jpg" alt="main-img" />

              <div className={styles.backdrop}>
                {/* header home */}
                <div className={styles.header_home}>
                  <p className='main_title' style={{ fontSize: "60px", color: '#fff', height: '520px' }}>mamyka</p>

                  <ul className={styles.sponsor}>
                    <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-23.svg' /></li>
                    <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-21.png' /></li>
                    <li style={{ border: '3px solid #fff', borderRadius: '50%' }}><img style={{ marginTop: '18px' }} src='https://mamuka.rest/local/templates/general/images/main-slider-aura.png' /></li>
                    <li><img src='https://mamuka.rest/local/templates/general/images/icon-main-slider-22.png' /></li>
                  </ul>

                  <div className={styles.Box_go_menu}>
                    <div className={styles.food}>
                      <p style={{ fontSize: "30px" }}>Food Menu</p>
                      <Link href="/shop">   <p>{">>>>>"}</p></Link>
                      <img className={styles.image} src="https://mamuka.rest/local/templates/general/images/main-slider-card-2.png" />
                    </div>

                    <div className={styles.drink}>
                      <p style={{ fontSize: "30px", color: '#fff' }}>Drink Menu</p>
                      <Link href="/shop">   <p>{">>>>>"}</p></Link>
                      <img className={styles.image} src="https://mamuka.rest/local/templates/general/images/main-slider-card-1.png" />
                    </div>
                  </div>
                </div>

                {/*  */}
                <ul className={styles.box_introduce}>
                  <li className={styles.first} >
                    <h1>About the restaurant</h1>
                    <p>
                      "Mamuka" là một nhà hàng gia đình kiểu Georgia được tạo ra theo truyền thống hiếu khách tốt nhất của miền Nam. Chúng tôi đã cố gắng kết hợp phong cách tinh tế, hương vị phong phú của Gruzia và mức độ tiện nghi hiện đại. Và khi thức ăn ngon được kết hợp với dịch vụ chất lượng, bạn sẽ có được một nhà hàng mà bạn muốn quay lại lần nữa.
                    </p>
                    <p className={styles.btn_more}><b>More about us</b></p>
                  </li>
                  <li className={styles.second}>
                    <iframe src="//player.vimeo.com/video/231571928?title=0&portrait=0&byline=0&autoplay=1&loop=1&transparent=1" title="YouTube video player" frameBorder={0} allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen></iframe>
                  </li>
                </ul>

                {/* Chef Famous */}
                <div className={styles.wrapp__chefFamous_home}>
                  <h2 > Đầu Bếp Hàng Đầu</h2>
                  <Slider {...settings}>
                    {data.map((data, index) => (
                      <div key={index}>
                        <Link href="/chef-famous-detail">
                          <img style={{ width: "90%", height: "235px", margin: 'auto', borderRadius: '18px' }} src={data.src} />
                        </Link>

                      </div>
                    ))}
                  </Slider>

                  <div style={{ marginTop: '30px' }}>
                    <Link href="/chef-famous">
                      {/* <ButtonMore /> */}
                    </Link>
                  </div>
                </div>

                <div style={{ marginTop: '140px', display: 'flex', flexWrap: 'wrap', paddingTop: '20px', width: '90%', margin: 'auto', borderTop: '2px solid #BF014B' }}>
                  <div className={styles.contentImage_aboutUs} style={{ paddingRight: '20px' }}>
                    <div className={styles.GRItem}>
                      <div className={styles.items}>
                        <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/d25/600_600_1/d259804b9a895cf765e9ef22ac95e80b.jpg" />
                      </div>
                      <div className={styles.items}>
                        <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/d25/600_600_1/d259804b9a895cf765e9ef22ac95e80b.jpg" />
                      </div>
                      <div className={styles.items}>
                        <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/d25/600_600_1/d259804b9a895cf765e9ef22ac95e80b.jpg" />
                      </div>
                      <div className={styles.items}>
                        <img style={{ width: '100%', borderRadius: '5px' }} src="https://mamuka.rest/upload/resize_cache/iblock/d25/600_600_1/d259804b9a895cf765e9ef22ac95e80b.jpg" />
                      </div>
                    </div>
                  </div>

                  <div className={styles.content_aboutUs} >
                    <ul className={styles.box_introduce2}>
                      <li className={styles.first} >
                        <h1>About the restaurant</h1>

                        <p>
                          "Mamuka" là một nhà hàng gia đình kiểu Georgia được tạo ra theo truyền thống hiếu khách tốt nhất của miền Nam. Chúng tôi đã cố gắng kết hợp phong cách tinh tế, hương vị phong phú của Gruzia và mức độ tiện nghi hiện đại. Và khi thức ăn ngon được kết hợp với dịch vụ chất lượng, bạn sẽ có được một nhà hàng mà bạn muốn quay lại lần nữa.
                        </p>

                        <p className={styles.btn_more}><b>More about us</b></p>
                      </li>
                    </ul>
                  </div>
                </div>
                <Footer />
              </div>
            </div>
          </div>
        </MasterLayout>
      </div>
    </>
  )
}
