function CircleImage(props){
    return(
        <li className="variant">
              <img
                src={props.image}
                alt=""
              />
            </li>
    );
}

export default CircleImage