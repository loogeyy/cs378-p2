import React from 'react';


// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({ title, description, imageName, price, count, updateValue }) => {
    var imgSrc = `images/${imageName}`

    return (
        <div class="row d-flex align-items-center justify-content-center">
            <div class="col-4">
                <img class="menu-item-img" src={imgSrc} alt={title}/>
            </div>
            <div class="col-8">
                <div class="row d-flex align-items-center justify-content-center">
                    <h1 class="menu-item-title">{title}</h1>
                    <p class="menu-item-desc">{description}</p>
                    <div class="col">
                        {price}
                    </div>
                    <div class="col">
                        <button class="count-button"
                        onClick={() => updateValue(title, -1)}>-</button>
                        {count}
                        <button class="count-button"
                        onClick={() => updateValue(title, 1)}>+</button>
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MenuItem;
