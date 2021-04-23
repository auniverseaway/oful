const getProperty = (object, objectPath) => {
    const pathArray = objectPath.split('.');
    return pathArray.reduce((acc, part) => acc && acc[part], object);
};

const getObjectProperty = (toggleKey) => {
    return getProperty(window, toggleKey);
};

export default getObjectProperty;