import './HomePage.css';
import github_icon from '../../assets/github_icon.png';

function HomePage(){
    return(
        <div className='homepage_container'>
            <div className='homepage_left'>
                <p className='homepage_left_h1'>
                    <span className='red_color'>Hi,</span> my name is 
                </p>
                <p className='homepage_left_h2'>
                    Swati Kumari
                </p>
                <p className='homepage_left_h3'>
                    Student at <span className='purple color'> Lovely Ptofessional University</span>
                </p>
                <p className='homepage_left_description'>
                Passionate and enthusiastic data science student with a strong passion
 for science and technology. Currently pursuing a bachelors degree at
 Lovely Professional University in Computer Science and Engineering.
 Proficient in programming languages like Java,  programming, C++ ,
 HTML and CSS and Python ,  eager to contribute my knowledge in real
world projects. Seeking hands-on experience to further develop skills
 in data analysis and innovative problem solving , aligning with a strong
 foundation in computer science principles.
                </p>
                <div>
                    <a href='https://github.com/' target='_blank'>
                    <img 
                    src={github_icon}
                    alt='githubIconImage'
                    className='homepage_logo'>

                    </img>
                    </a>
                </div>
                <a href='mailto:swati02317@gnail.com'>
                    <button className='homepage_left_button'>
                        Get In Touch
                    </button>
                    </a>
            </div>
            <div className='homepage_right'>
                <img src='https://media.tenor.com/Tqj1bE9lD8UAAAAM/shiwu.gif ' alt='GIF' />
            </div>
        <h1>HomePage</h1>
        </div>
    )
}
export default HomePage;