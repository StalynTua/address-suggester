import React, {useState, useEffect, useRef} from 'react'
import AddressInput, {
    Prediction, PredictionContainerText,
    PredictionText,
    PredictorContainer,
    PredictorList
} from './input-autocomplete-address.style'

export interface AddressInputCustomProps {
    placeholder?: string;
    handleAddress: (e: string | undefined) => void;
    apiKey: string;
}

function AutocompleteAddress(props: AddressInputCustomProps) {

    const [autocomplete, setAutocomplete] = useState<any>({})

    const [input, setInput] = useState('')

    const [predictions, setPredictions] = useState([])

    const [showPredictions, setShowPredictions] = useState<boolean>(false)

    const predictionList = useRef<HTMLDivElement>(null);

    const loadGoogleMapsAPI = (callback: any) => {

        const googleScript = document.getElementById('googleMaps')

        if (!googleScript) {
            const script = document.createElement('script')

            script.src = `https://maps.googleapis.com/maps/api/js?key=${props.apiKey}&libraries=places`
            script.id = 'googleMaps'

            document.body.appendChild(script)

            script.onload = () => callback()
        }
    }

    useEffect(() => {
        loadGoogleMapsAPI(() => {
            setAutocomplete(new window.google.maps.places.AutocompleteService())
        })
    }, [])

    const getPredictions = (input: any) => {
        autocomplete.getPlacePredictions(
            {input},
            (predictions: any) => {
                if (predictions) {
                    setPredictions(predictions.map((prediction: any) => {
                        const {main_text, secondary_text} = prediction.structured_formatting
                        return ({mainAddress: main_text, secondaryAddress: secondary_text})
                    }).slice(0, 3))
                    setShowPredictions(true)
                }
            }
        )
    }

    useEffect(() => {
        if (input.length > 0) {
            getPredictions(input)
        }
    }, [input])

    const selectAddress = (address: any) => {
        props.handleAddress(address);
    }

    useEffect(() => {
        setShowPredictions(false)

    }, [props.handleAddress])


    useEffect(() => {
        document.addEventListener('keydown', handleKeyDown)
        return () => {
            document.removeEventListener('keydown', handleKeyDown)
        }
    }, [])

    const handleKeyDown = ({code}: any) => {
        switch (code) {
            case 'ArrowUp':
                handleArrowUp()
                break
            case 'ArrowDown':
                handleArrowDown()
                break
            case 'Enter':
                handleEnter()
                break
        }
    }

    const handleArrowUp = () => {
        if (predictionList.current) {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.previousSibling) {
                const previousSibling = activeElement.previousSibling;
                if (previousSibling instanceof HTMLElement) {
                    previousSibling.focus();
                }
            } else {
                const autocompleteInput = document.getElementById('autocomplete-address-input');
                if (autocompleteInput) {
                    autocompleteInput.focus();
                }
            }
        }
    };


    const handleArrowDown = () => {
        if (predictionList.current && predictionList.current instanceof HTMLElement) {
            const activeElement = document.activeElement;
            if (activeElement && activeElement.id !== 'prediction') {
                const firstChild = predictionList.current.childNodes[0];
                if (firstChild instanceof HTMLElement) {
                    firstChild.focus();
                }
            } else {
                if (activeElement && activeElement.nextSibling) {
                    const nextSibling = activeElement.nextSibling;
                    if (nextSibling instanceof HTMLElement) {
                        nextSibling.focus();
                    }
                }
            }
        }
    };


    const handleEnter = () => {
        if (predictionList.current) {
            const activeElement = document.activeElement;
            if (activeElement instanceof HTMLElement && activeElement.childNodes[0] instanceof HTMLElement) {
                const mainAddress = activeElement.childNodes[0].querySelector('h3')?.innerHTML || '';
                const secondaryAddress = activeElement.childNodes[0].querySelector('h4')?.innerHTML || '';
                const concatenatedValue = mainAddress.concat(secondaryAddress);
                props.handleAddress(concatenatedValue);
            }
        }
    };

    return (
        <AddressInput>
            <i className="fa fa-map-marker-alt" style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                fontSize: "30px",
            }}/>
            <input
                type='text'
                id='autocomplete-address-input'
                placeholder={props.placeholder}
                value={input}
                onChange={(event) => setInput(event.target.value)}
            />

            {
                showPredictions &&
                <PredictorContainer>
                    <PredictorList ref={predictionList}>
                        {
                            predictions.map((prediction: any, key) => {
                                return (
                                    <Prediction
                                        id='prediction'
                                        key={key}
                                        tabIndex={0}
                                        onClick={() => selectAddress(prediction.mainAddress.concat(prediction.secondaryAddress))}
                                    >
                                        <PredictionContainerText>
                                            <i className="fa fa-map-marker-alt" style={{
                                                fontSize: "30px",
                                                margin: "1em ",
                                                color: 'rgb(182, 187, 195)'
                                            }}/>
                                            <PredictionText>
                                                <h3> {prediction.mainAddress}</h3>
                                                <h4> {prediction.secondaryAddress}</h4>
                                            </PredictionText>
                                        </PredictionContainerText>

                                    </Prediction>
                                )
                            })
                        }
                    </PredictorList>
                </PredictorContainer>
            }
        </AddressInput>
    )
}

export default AutocompleteAddress
