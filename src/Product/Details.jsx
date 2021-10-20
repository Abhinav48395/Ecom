import React from 'react'
import productData from './product.json';
import { Button } from 'react-bootstrap'
import './product.css'
import { Link } from 'react-router-dom'



export const Details = ({ match }) => {


    const productDetails = productData.Product.find((data) => data.p_name === match.params.pname);
    console.log("subCat", productDetails);


    const prodDetails = productDetails.subCatagory.find((data) => data.s_id === match.params.id)
    console.log("productdetails", prodDetails)
    return (
        <div>
            <br />
            <br />
            <br />
            <div className="container">
                <div className="row">

                    <div className="col-lg-6">

                        <img src={prodDetails.image} className="imgdetails" />

                    </div>
                    <div className="col-lg-6">
                        <div className="details">
                            <h1>{prodDetails.company}</h1>
                            <hr />

                            <h5 style={{ color: 'green' }}>	₹ {prodDetails.price}</h5>
                            <h6>FREE Scheduled Delivery</h6>
                            <p style={{ backgroundColor: 'green', color: 'white', padding: '5px', width: '38%' }}>No Cost EMI Available.</p>
                            <hr />
                            <span style={{ fontSize: '20px', color: 'green' }}>In Stock.</span><br />
                            <h3>About This Item :</h3>
                            <p>{prodDetails.s_des}</p>
                            <Button variant="primary" as={Link} to="/Book">Buy Now</Button>
                        </div>

                    </div>
                </div><br />
               <br />
                <div className="row">
                    <div className="col" >
                        <div className="prodetails">
                        <h1>About This Item in Details:</h1><br />
                        <ul>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe, reprehenderit alias modi voluptas similique fugiat expedita laboriosam? Animi maxime nulla voluptatem nemo perferendis quisquam qui earum cumque mollitia magnam!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam distinctio explicabo. Excepturi aut similique eius alias ipsum harum dignissimos!</li>
                            <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Harum, voluptatem cumque, perspiciatis quas praesentium eveniet officia reprehenderit nemo cum numquam natus libero voluptates repellendus totam perferendis tenetur quasi vero corporis accusantium doloremque ex temporibus, quaerat nostrum! Eaque magnam qui cumque? Eum odit quos doloremque accusamus assumenda excepturi hic explicabo iste recusandae, fugit atque! Fugit aperiam accusantium asperiores obcaecati reprehenderit sed veniam optio, ab quidem tempora molestiae fugiat placeat dolor voluptas reiciendis deserunt molestias. Perferendis rem eum modi! Qui, placeat accusamus!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam, officiis in blanditiis illo quisquam dolores tenetur dicta perferendis excepturi assumenda voluptate dignissimos vero reprehenderit ratione maxime quia sequi quos similique corrupti animi. Mollitia dolores iure itaque saepe placeat esse sapiente? Ea quo sit itaque quibusdam architecto suscipit libero rerum praesentium?</li>
                            <li>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci saepe, reprehenderit alias modi voluptas similique fugiat expedita laboriosam? Animi maxime nulla voluptatem nemo perferendis quisquam qui earum cumque mollitia magnam!</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam numquam distinctio explicabo. Excepturi aut similique eius alias ipsum harum dignissimos!</li>
                            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veritatis, at libero. Blanditiis recusandae placeat ut facilis explicabo voluptatem unde veritatis ullam ducimus ea ex aperiam repellendus, quo beatae adipisci est. Quas voluptatem unde enim praesentium maiores, suscipit minima sed cum?</li>
                            <li>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro suscipit facere magni error mollitia, quisquam culpa beatae! Quidem corrupti placeat magnam, nostrum saepe expedita ullam labore dolores sequi autem, enim atque magni sit nulla tenetur at veritatis deserunt officia illum ad reiciendis veniam, ratione ab. Non optio ratione enim totam?</li>
                            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Veritatis quisquam voluptas aut officiis, saepe iure blanditiis laboriosam cupiditate repudiandae veniam facilis fugiat ea necessitatibus ipsam, illum recusandae at esse, natus velit rerum repellendus impedit id odio! Nesciunt id tempora perspiciatis architecto inventore, voluptate sapiente nobis quisquam excepturi vitae debitis suscipit corrupti doloremque unde magnam minima. Aliquid, aperiam tempora. At provident unde quae a minima illum sequi blanditiis consectetur deserunt quia.</li>
                        </ul>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}
