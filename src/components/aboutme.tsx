import '../css/aboutme.css'

function Aboutme() {
    return (
        <div className="aboutme">
            <h1>About Me</h1>
            <div>
                <div className="profile-box">
                    <img id="profile" src="public\profile.png" alt="Profile" />
                </div>
                <div className='description'>
                    <p>Hello! I'm Aditi Verma, a passionate Computer Engineering student with a keen interest in web development and software engineering. I love creating beautiful and functional websites that provide great user experiences. When I'm not coding, you can find me exploring new technologies, reading tech blogs, or working on personal projects to enhance my skills.</p>
                    <button>Resume</button>
                </div>
            </div>
        </div>
    )
}

export default Aboutme;