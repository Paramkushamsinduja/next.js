import React from "react";

export const getStaticProps = () => {
    //api call
    return {
      props : {footerstatus: true}
    }
  }

const Lab = (props) => {
    return(
        <div>
            <h2>This is lab file.</h2>
        </div>
    )
}

export default Lab;