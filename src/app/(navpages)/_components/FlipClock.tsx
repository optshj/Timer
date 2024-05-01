import styled from "styled-components";

import FlipCard from "./FlipClockComponents/FlipCard";

function FlicpClock() {

  return (
        <div>
            <FlipCard   back={1} front={2}/>
        </div>
    );
}

export default FlicpClock;