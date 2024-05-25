import { A } from "@solidjs/router";
import { createSignal, For } from "solid-js";

//
// Only edit this file from here
const buttonList = [
  { href: "/", text: "/index" },
  { href: "/users", text: "/users" },
  { href: "/users/1", text: "/users/1" },
  { href: "/users/1/2", text: "/users/1/2" },
];
// to here
//

function Button(props) {
  return (
    <A
      activeClass="btn-active"
      inactiveClass="btn-inactive"
      href={props.href}
      end
    >
      {props.children}
    </A>
  );
}

export default function Nav() {
  const [buttons, setButtons] = createSignal(buttonList);
  return (
    <nav>
      <For each={buttons()}>
        {(button) => <Button href={button.href}>{button.text}</Button>}
      </For>
    </nav>
  );
}
