import React from "react";

export const getStaticProps = () => {
    //api call
    return {
      props : {footerstatus: true}
    }
  }

const Sports = (props) => {
    return(
        <div>
            <h2>This is Sports file.</h2>
        </div>
    )
}

export default Sports;