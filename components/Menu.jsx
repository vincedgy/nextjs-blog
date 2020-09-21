import React from "react";
import Nav from "react-bootstrap/Nav";
import Link from "next/link";

const Menu = () => {

    const [selected, setSelected] = React.useState("1")
  return (
      <>
    <Nav
      activeKey={selected}
      variant="pills"
      onSelect={(selectedKey) => setSelected(selectedKey)}
    >
      <Nav.Item>
        <Link href="/" passHref>
            <Nav.Link eventKey="1">Home</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/about" passHref>
            <Nav.Link eventKey="2">About</Nav.Link>
        </Link>
      </Nav.Item>

      <Nav.Item>
        <Link href="/blog" passHref>
            <Nav.Link eventKey="3">Blog</Nav.Link>
        </Link>
      </Nav.Item>

    </Nav>

    <style jsx>{`
    .m-link a {
      color: white !important;
      text-decoration: none;
    }
    }`}</style>

    </>
  );
};

export default Menu;
