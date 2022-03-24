import React, { useState } from "react";
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link,
    useResolvedPath,
    useMatch
} from "react-router-dom";

import About from './pages/about';
import Contact from './pages/contact';
import Gallery from './pages/gallery';
import Home from './pages/home';
import Shop from './pages/shop';
import styled from 'styled-components';
import logo from './logo.png';
import colourcircle from './colourcircle.png';
import colourscheme from "./colourscheme";

const StyledDiv = styled.div`
    .toggled {
        display: none;
    }

    .noMobile {
        display: none;
    }
    
    button {
        height: 3em;
        width: 5em;
        background: url(${logo});
        background-size: contain;
        background-repeat: no-repeat;
        background-position: center;
        border: none;
    }

    nav {
        ul {
            display: flex;
            flex-direction: column;
            list-style-type: none;
            padding: 0;
            li {
                font-family: "Noto Serif Display", serif;
                text-transform: uppercase;
                font-size: 140%;
                a {
                    flex-direction: row;
                    text-decoration: none;
                    color: ${colourscheme.accent1};
                    div {
                        height: 3em;
                        text-align: center;
                        vertical-align: middle;
                        line-height: 3em;
                        img {
                            display: none;
                        }
                    }
                }
                .active {
                    color: ${colourscheme.hot};
                }
            }
        }
    }
    @media (min-width: 768px) {
        button {
            display: none;
        }
        .toggled {
            display: flex;
        }
        .noMobile {
            display: flex;
            width: 60%;
            position: absolute;
            left: -30%;
            top: -50%;
        }
        nav {
            justify-content: flex-end;
            ul {
                width: 70%;
                justify-content: space-around;
                flex-direction: row;

                li {
                    a {
                        div {
                            text-align: center;
                            vertical-align: middle;
                            line-height: 3em;
                            img {
                                display: inline;
                                max-height: 50%;
                            }      
                        }
                        :hover {
                            div {
                                background-image: url(${colourcircle});
                                background-size: contain;
                                background-repeat: no-repeat;
                                background-position: center;
                            }
                        }
                    }
                }
            }
        }
    }
`;

const CustomLink = ({children, to, ...props}) => {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true })

    return (
        <div>
            <Link
                className={match ? "active" : null}
                to={to}
                {...props}
            >
                {children}
            </Link>
        </div>
    );
}

let SimplyPatriceRouter = () => {
    let [toggled, setToggled] = useState(true);

    let handleToggle = () => {
        setToggled(!toggled);
    }

    return (
        <Router>
            <StyledDiv>
            <button onClick={handleToggle}></button>
                <nav class={toggled ? "toggled" : null}>
                    <img class="noMobile" src={colourcircle}/>
                    <ul>
                        <li>
                            <CustomLink to="/"><div><img src={logo}/> Home</div></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/about"><div>About</div></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/contact"><div>Contact</div></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/gallery"><div>Gallery</div></CustomLink>
                        </li>
                        <li>
                            <CustomLink to="/shop"><div>Shop</div></CustomLink>
                        </li>
                    </ul>
                </nav>

                <Routes>
                    <Route path="/about" element ={<About />} />
                    <Route path="/shop" element ={<Shop />} />
                    <Route path="/" element ={<Home />} />
                    <Route path="/contact" element ={<Contact />} />
                    <Route path="/gallery" element ={<Gallery />} />
                </Routes>
            </StyledDiv>
        </Router>
    );
}

export default SimplyPatriceRouter