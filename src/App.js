import React from 'react';
import './jarvis.css';

// Import the Artyom library
import Artyom from 'artyom.js';

// Import the previously created class to handle the commands from another file
import ArtyomCommandsManager from './ArtyomCommands.js';

// Create a "globally" accesible instance of Artyom
const Jarvis = new Artyom();

export default class App extends React.Component {
    constructor (props, context){
        super(props, context);

        // Add `this` context to the handler functions
        this.startAssistant = this.startAssistant.bind(this);
        this.stopAssistant = this.stopAssistant.bind(this);
        this.speakText = this.speakText.bind(this);
        this.handleTextareaChange = this.handleTextareaChange.bind(this);

        // Prepare simple state
        this.state = {
            artyomActive: "",
            textareaValue: "",
            artyomIsReading: false
        };

        // Load some commands to Artyom using the commands manager
        let CommandsManager = new ArtyomCommandsManager(Jarvis);
        CommandsManager.loadCommands();
    }
    
    startAssistant() {
        let _this = this;

        console.log("Artyom succesfully started !");
        Jarvis.ArtyomVoicesIdentifiers["tr-TR"] = ["tr-TR", "tr_TR"];
        Jarvis.initialize({
            lang: "tr-TR",
            debug: true,
            continuous: true,
            soundex: true,
            listen: true
        }).then(() => {
            // Display loaded commands in the console
            console.log(Jarvis.getAvailableCommands());

            Jarvis.say("Size nasıl hizmet edebilirim?");

            _this.setState({
                artyomActive: "active"
            });
        }).catch((err) => {
            console.error("Oops, bir hata meydana geldi !", err);
        });
    }

    stopAssistant() {
        let _this = this;

        Jarvis.fatality().then(() => {
            console.log("Jarvis başarılı bir şekilde kapatıldı.");

            _this.setState({
                artyomActive: ""
            });
            
        }).catch((err) => {
            console.error("Aman, bir hata oldu!", err);

            _this.setState({
                artyomActive: ""
            });
        });
    }

    speakText() {
        let _this = this;

        _this.setState({
            artyomIsReading: "active"
        });

        // Speak text with Artyom
        Jarvis.say( _this.state.textareaValue, {
            onEnd() {
                _this.setState({
                    artyomIsReading: ""
                });
            }
        });
    }

    handleTextareaChange(event) {
        this.setState({
            textareaValue: event.target.value
        });
    }

    render() {
        return (
            <div>

                <h1 className="h1">Hakkı Sesli Asistana Hoşgeldiniz!</h1>

                <p>Sandığınızdan daha fazlasını yapabilme kapasitesine sahip.</p>
                
                {/* Voice commands action buttons */}
                <div className="semi_arc e6" data-jarvis={this.state.artyomActive} onClick={this.startAssistant}>
                    <div className="semi_arc_3 e5_1">
                        <div className="semi_arc_3 e5_2">
                        <div className="semi_arc_3 e5_3">
                            <div className="semi_arc_3 e5_4">
                            </div>
                        </div>
                        </div>
                    </div>
                    <div className="core"></div>
                </div>


                {/* Speech synthesis Area */}

                <p>Eğer istersen yazdığın bir metni de senin için seslendirebilirim:</p>
                
                <textarea rows="5" onChange={this.handleTextareaChange} value={this.state.textareaValue}/>
                <br/>
                {/* Read the text inside the textarea with artyom */}
                <input className="btn-neon" type="button" value="Yazıyı Oku" disabled={this.state.artyomIsReading} onClick={this.speakText}/>

            </div>
        )
    }
}
