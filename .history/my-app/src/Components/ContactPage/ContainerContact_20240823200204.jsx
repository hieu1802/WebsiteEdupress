import React, {useState,useEffect} from 'react'
import img16 from '../img/img16.png'
import img17 from '../img/img17.png'
import img18 from '../img/img18.png'
import CommentForm from '../../Course-detail/CommentForm'

function ContainerContact() {

    const [reviewsData, setReviewsData] = useState([]);
    // const addComment = (newReview) => {
    // setReviewsData(prevReviews => [...prevReviews, newReview]);
    // };

    useEffect(() => {
        const savedComments = JSON.parse(localStorage.getItem("comments")) || [];
        setReviewsData(savedComments);
      }, []);

    const addComment = (newReview) => {
        setReviewsData((prevReviews) => [...prevReviews, newReview]);
      };
  return (
    <div className='contactContainer'>
        <div className='contactBox'>
            <div className='contactInf'>
                <h1>Need a direct line?</h1>
                <div className='info'>
                    <p>Cras massa et odio donec faucibus in. Vitae pretium massa dolor ullamcorper lectus elit quam.</p>
                    <div className='infoPhone'>
                        <div className='iconsInfo'>
                            <img src={img16} alt='info'/>
                        </div>
                        <div className='textInfo'>
                            <p>Phone</p>
                            <h5>(123) 456 7890</h5>
                        </div>
                    </div>
                    <div className='infoPhone'>
                        <div className='iconsInfo'>
                            <img src={img17} alt='IconsInfo'/>
                        </div>
                        <div className='textInfo'>
                            <p>Email</p>
                            <h5>contact@thimpress.com</h5>
                        </div>
                    </div>
                </div>
            </div>
            <div className='contactMap'>
                <img src={img18} alt='map'/>
            </div>
        </div>
        <div className='contactUs'>
                <CommentForm className='cmt' addComment={addComment}/>
        </div>
    </div>
  )
}

export default ContainerContact