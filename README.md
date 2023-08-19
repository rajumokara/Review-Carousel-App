In this project, let's build a **Reviews App** 
### Refer to the image below:

<br/>
<div style="text-align: center;">
<img src="https://assets.ccbp.in/frontend/content/react-js/reviews-app-output-v2.gif" alt="reviews app output" style="max-width:70%;box-shadow:0 2.8px 2.2px rgba(0, 0, 0, 0.12)">
</div>
<br/>



### Set Up Instructions


<summary>Click to view</summary>

- Download dependencies by running `npm install`
- Start up the app using `npm start`


### Completion Instructions



The app must have the following functionalities

- When the left arrow is clicked, then the previous review details should be displayed
- When the right arrow is clicked, then the next review details should be displayed
- If the review that is being displayed is the first in the list of reviews
  - There should not be any state change when the left arrow is clicked
- If the review that is being displayed is the last in the list of reviews
  - There should not be any state change when the right arrow is clicked
- The `ReviewsCarousel` component receives the `reviewsList` as a prop. It consists of a list of review objects with the following properties in each review object

  |     Key     | Data Type |
  | :---------: | :-------: |
  |   imgUrl    |  String   |
  |  username   |  String   |
  | companyName |  String   |
  | description |  String   |




### Important Note


**The following instructions are required for the tests to pass**

- The button to check the previous review should have the data-testid attribute with value as **leftArrow**
- The button to check the next review should have the data-testid attribute with value as **rightArrow**
- The profile images should have the alt as the value of the key `username` from each review object provided
</details>

### Image URLs



- [https://assets.ccbp.in/frontend/react-js/reviews-bg.png](https://assets.ccbp.in/frontend/react-js/reviews-bg.png)
- [https://assets.ccbp.in/frontend/react-js/left-arrow-img.png](https://assets.ccbp.in/frontend/react-js/left-arrow-img.png) alt should be **left arrow**
- [https://assets.ccbp.in/frontend/react-js/right-arrow-img.png](https://assets.ccbp.in/frontend/react-js/right-arrow-img.png) alt should be **right arrow**



