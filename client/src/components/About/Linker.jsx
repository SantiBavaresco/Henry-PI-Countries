import React from 'react';

function Linker(props) {
  function handleClick(event) {
    event.preventDefault();
    window.open(props.href, '_blank');
    // window.open ("#maintain_focus","_self");
  }

  return (
    <a href={props.href} onClick={handleClick} cursor="pointer">
      {props.children}
    </a>
  );
}

export default Linker;