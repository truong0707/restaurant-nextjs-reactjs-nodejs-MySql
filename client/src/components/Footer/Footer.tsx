import styles from '@/styles/styleComponent/Footer.module.css';

export default function Footer() {
    return (
        <>
            <div className={styles.wrap_footer_app}>
                <div className='container'>
                    <div className='row'>
                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <p className={styles.title_item_footer}>About Us</p>
                            <p className={styles.content_item_footer}>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore dolore magna aliqua.</p>
                        </div>

                        <div className='col-lg-4 col-md-6 col-sm-6'>
                            <p className={styles.title_item_footer}>Newsletter</p>

                            <p className={styles.content_item_footer}>Stay update with our latest</p>
                            <input className={styles.input_footer}/>
                        </div>

                        <div className='col-lg-3 col-md-6 col-sm-6'>
                            <div>
                                <h6 className={`${styles.title_item_footer} mb-20`}>Instragram Feed</h6>
                            </div>

                            <div className={styles.group_img_footer}>
                                {/* <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p>
                                <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p>
                                <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p>
                                <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p>
                                <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p>
                                <p style={{ width: '20%' }}><img src='https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg' alt='' /></p> */} 
                            </div>
                        </div>

                        <div className='col-lg-2 col-md-6 col-sm-6'>
                            <div>
                                <h6 className={styles.title_item_footer}>Follow Us</h6>
                            </div>
                        </div>
                    </div>

                    <p style={{ textAlign: 'center', marginTop:'70px', color: '#636363' }}>Copyright ©2022 All rights reserved | This template is made with  by Colorlib</p>
                </div>

            </div>
        </>
    );
}