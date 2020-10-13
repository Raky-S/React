import React from 'react';

class Quizz extends React.Component {


    constructor() {
        super();
        this.click = this.click.bind(this);

        this.state = {
            list: []
        }
    }

    componentDidMount() {
        this.setState({
            list: [1, 2, 3, 4]
        })
    }

    click() {
        console.log('Je suis clické');
        // il faut que je rajoute un element à ma list
        let maList = this.state.list
        maList = maList.push(5, 6, 7, 'ok')

    }
    render() {
        return (
            <div>
                {/* afficher dans une balise p tout les element de la list}*/}
                {this.state.list.map((elem)=>{
                    return (<p>La liste: {elem} </p>)})}
                <p>La liste </p>
                <button onClick={this.click}>Button</button>
            </div>
        )
    }

}

export default Quizz