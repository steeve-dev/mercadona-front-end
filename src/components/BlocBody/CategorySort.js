import React, {useEffect} from 'react';

const CategorySort = () => {
    let test = 'test'
    useEffect(() => {
        fetch('http://localhost:8080/api/category/', {
            method: 'GET',
        })
            .then((response) => {
                if (response.ok){
                    response.json().then(data =>{
                        data.forEach(element => console.log(element.name))
                    })
                }
            })
    })

    return (
        <section className="section-category">
            <h2>Catégories</h2>
            <ul>
                <li className="section-category-li"></li>
                <li className="section-category-li">catégorie 2</li>
                <li className="section-category-li">catégorie 3</li>
                <li className="section-category-li">catégorie 4</li>
                <li className="section-category-li">catégorie 5</li>
            </ul>
        </section>
    );
};

export default CategorySort;