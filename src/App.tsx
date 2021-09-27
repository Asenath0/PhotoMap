import ButtonImport from "./components/ButtonImport/ButtonImport";
import Map from "./components/Map/Map";
import ImportField from "./components/ImportField/ImportField";
import {useState, useRef} from 'react'
import Header from "./components/Header/Header";
import ImportFieldAnimation from "./components/ImportField/ImportFieldAnimation";
import Footer from "./components/Footer/Footer";



function App() {
  const [shouldAnimate, setShouldAnimate] = useState(false);
  const shouldAnimateHandler = (bool: boolean) => setShouldAnimate(bool)

  const [isImportingOn, setIsImportingOn] = useState(false);

  const isImportingOnHandler = (): void => setIsImportingOn(isImportingOn => !isImportingOn);

  const [currentImage, setCurrentImage] = useState("img");

  const inputRef: React.Ref<HTMLInputElement> = useRef(null);

  const currentImageHandler = (): void => {
    //@ts-ignore
    let img = inputRef.current.files[0];

    if (img !== null && img !== undefined) {
      const fileType = img["type"];
      const validImageTypes = [
        "image/gif",
        "image/jpg",
        "image/png",
        "image/jpeg",
      ];

      if (validImageTypes.includes(fileType)) {
        let src: string = URL?.createObjectURL(img);
        src !== null && setCurrentImage(src);
      } else {
        setCurrentImage("fail");
      }
    } else {
      setCurrentImage("fail");
    }
  };

  let image= {
    source: currentImage,
    latitude: 20,
    longitude: 10
  }

  return (
    <div className="App">
      {shouldAnimate && 
        <ImportFieldAnimation isImportingOn={isImportingOn} child={
          <ImportField isImportingOnHandler={isImportingOnHandler} 
            inputRef={inputRef} 
            currentImage={currentImage}  
            currentImageHandler={currentImageHandler} />
        }/> 
      }
   
      <Header />
      <Map image={image}/>
      
      <ButtonImport ImportingHandler={isImportingOnHandler} shouldAnimate={shouldAnimateHandler} />

      <Footer />
    </div>
  );
}

export default App;
