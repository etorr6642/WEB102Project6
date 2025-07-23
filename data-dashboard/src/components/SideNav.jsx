import Layout from '../routes/Layout'
function SideNav () {
    return (
        <div className="sideNav">
            <Layout />
            <li className="home-link">
            <a 
              href="https://spoonacular.com/" 
              target="_blank" 
              rel="noopener noreferrer" 
            >
              More about Spoonacular
            </a>
            </li>
        </div>
    )

}

export default SideNav