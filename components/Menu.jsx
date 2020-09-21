import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Menu = () => {

    const [selected, setSelected] = React.useState("1")
  return (
      <>
      <div className="navbar-container">
    <Nav
      fill
      className="justify-content-center"
      activeKey={selected}
      variant="pills"
      onSelect={(selectedKey) => setSelected(selectedKey)}
    >
      
      <Nav.Item>
        <Link href="/about" passHref>
            <Nav.Link eventKey="2">About</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/" passHref>
            <Nav.Link eventKey="1">Home</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/blog" passHref>
            <Nav.Link eventKey="3">Blog</Nav.Link>
        </Link>
      </Nav.Item>

    </Nav>
    </div>

    <style jsx>{`
        .link a {
            color: white !important;
            text-decoration: none;
        }

        .navbar-container {
            padding: 1rem 10rem 1rem 10rem ;
            background-color: #2c3e50;
            box-shadow: 0 8px 6px -6px rgba(0, 0, 0, 0.4);
        }

        .navbar-container > div > .nav-item {
            heigth: 2rem !important;
        }

    }`}</style>

    </>
  );
};

export default Menu;
