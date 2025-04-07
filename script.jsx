const root = ReactDOM.createRoot(document.getElementById("root"))

root.render(
    <Example />
)

function Example(){
    return (
        <div className="parent">
        <h1 id="heading" >Learn web development</h1>
        <p>Welcome to MDN Learning Web Development (also known as Learn). This resource provides a structured set of tutorials teaching the essential skills and practices for being a successful front-end developer, along with challenges and further recommended resources.</p>

        <div><p>The aim of this area of MDN is not to take you from "beginner" to "expert" but to take you from "beginner" to "comfortable." From there, you should be able to start making your way, learning from <a href="#">the rest of MDN</a>, and other intermediate to advanced resources that assume a lot of previous knowledge.</p></div>
            
            <div><p>If you are a complete beginner, web development can be challenging we will hold your hand and provide enough detail for you to feel comfortable and learn the topics properly. You should feel at home whether you are a student learning web development (on your own or as part of a class), a teacher looking for class materials, a hobbyist, or someone who just wants to understand more about how web technologies work.</p>
            </div>

        </div>


        
    )
}