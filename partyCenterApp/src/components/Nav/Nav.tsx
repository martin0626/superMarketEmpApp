// import StaggeredMenu from './StaggeredMenu';

import { Link } from "react-router-dom";


// const menuItems = [
//   { label: 'Home', ariaLabel: 'Go to home page', link: '/' },
//   { label: 'Gallery', ariaLabel: 'Learn about us', link: '/gallery' },
//   { label: 'Services', ariaLabel: 'View our services', link: '/services' },
// ];

// const socialItems = [
//   { label: 'Twitter', link: 'https://twitter.com' },
//   { label: 'GitHub', link: 'https://github.com' },
//   { label: 'LinkedIn', link: 'https://linkedin.com' }
// ];





// export default function NavigationComp(){
//     return (
//         <div style={{ height: '50vh', background: "#333" }}>
//             <StaggeredMenu
//                 position="right"
//                 items={menuItems}
//                 socialItems={socialItems}
//                 displaySocials={true}
//                 displayItemNumbering={true}
//                 menuButtonColor="#fff"
//                 openMenuButtonColor="#333"
//                 changeMenuColorOnOpen={true}
//                 colors={['#B19EEF', '#5227FF']}
//                 logoUrl="../../assets/react.svg"
//                 accentColor="#ff6b6b"
//                 onMenuOpen={() => console.log('Menu opened')}
//                 onMenuClose={() => console.log('Menu closed')}
//             />
//         </div>
//     )
// }
export default function NavigationComp(){
    return (
      <nav className="navigation">
        <Link to="/" style={{ margin: "0 10px" }}>
          Home
        </Link>
        <Link to="/gallery" style={{ margin: "0 10px" }}>
          Gallery
        </Link>
        <Link to="/services" style={{ margin: "0 10px" }}>
          Services
        </Link>
      </nav>
    )
}
