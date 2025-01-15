import accSize1Image from '../../data/images/accessory-size-1.jpg';
import accSize2Image from '../../data/images/accessory-size-2.jpg';
import accSize3Image from '../../data/images/accessory-size-3.jpg';

const DrawerViewAccessory = ({drawersData, deleteAcc}) => {

    const getAccessoryImage = (size) => {
        const images = [accSize1Image, accSize2Image, accSize3Image];

        return images[size-1];
    }

    return <>
                {Object.entries(drawersData).map(([key, array]) => {
                    return array.map(item => (
                        <div 
                            className={`drawers-content__image-size${item.size}`} 
                            style={{top:"47px"}} 
                            data-id={item.id} 
                            key={item.id}
                        >
                            <img src={getAccessoryImage(item.size)} alt="Accessory" />
                            <div 
                                className="drawers-content__delete" 
                                data-id={item.id}
                                data-drawer={key}
                                onClick={deleteAcc}
                            >
                            </div>
                        </div>
                    ));
                })}
            </>

}

export default DrawerViewAccessory;

