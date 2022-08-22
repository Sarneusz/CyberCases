import React, {Component} from 'react';
import ChatBot from 'react-simple-chatbot';

class EndCallback extends Component {

    componentDidMount() {
        this.handleDelete = this.handleDelete.bind(this);
    }

    handleDelete({ steps, values }) {
        console.log("print steps: ")
        console.log(steps);
        console.log("print values: ")
        console.log(values);
        alert(`Chat handleEnd callback! Number: ${values[0]}`);
        //``
        // console.log("Clear...")
        // values[0]=null;
        // console.log("print values: ")
    }

    mojaFunkcja({ values }){
        console.log("TEST")
        // values[0].label='';
        // alert(`Chat handleEnd callback! Number: ${values[0]}`)

    }

    render() {
        return (
            <div className="docs-example-1">
                <ChatBot
                    // handleEnd={this.handleEnd}
                    steps={[
                        {
                            id: '1',
                            message: 'Pick a number',
                            trigger: '2',
                        },
                       {
                            id: '2',
                            options: [
                                { value: '1', label: '1', trigger: '3' },
                                { value: '2', label: '2', trigger: '3' },
                                { value: '3', label: '3', trigger: '3' },
                                { value: '4', label: '4', trigger: '3' },
                                { value: '5', label: '5', trigger: '3' },
                            ],
                        },
                        {
                            id: '3',
                            message: this.mojaFunkcja,
                            trigger: '4',
                        },
                        {
                            id: '4',
                            message: 'A callback message was called!',
                            trigger: '2',
                        },
                    ]}
                />
            </div>
        );
    }
}

export default EndCallback;