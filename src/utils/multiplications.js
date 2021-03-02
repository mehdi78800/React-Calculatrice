const Multiplication = () => {

    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
    }

    const randMultip = Math.round(getRandomArbitrary(0,100)).toString()+" x "+Math.round(getRandomArbitrary(0,100)).toString();


    return (
        randMultip
    )
}

export default Multiplication;