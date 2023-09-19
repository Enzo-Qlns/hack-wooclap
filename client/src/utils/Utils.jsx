const Utils = {
    isEmpty(...values) {
        if (values.length === 0)
            return true;
        for (let index = 0; index < values.length; index++) {
            const value = values[index];
            const isArray = Array.isArray(value);
            let bool = (undefined === value || "" === value || " " === value || null === value || (isArray && value.length === 0) || (typeof value === 'string' && value.length === 0));
            if (bool)
                return true;
        }
        return false;
    },
    isNone(...values) {
        for (let index = 0; index < values.length; index++)
            if ('None' === values[index]) return true;
        return false;
    },
    objsize(obj, size = 0, key = undefined) {
        for (key in obj)
            if (obj.hasOwnProperty(key))
                size++;
        return size;
    },
    boolToValue(value) {
        return value ? 'OUI' : 'NON';
    },
    encodeBase64(value) {
        return btoa(value);
    },
    decodeBase64(value) {
        return atob(value);
    },
    convertDataURIToBinary(inputElement, onResponse = undefined) {
        var file = inputElement.files[0];
        var reader = new FileReader();
        reader.onloadend = function () {
            onResponse(reader.result);
        }
        reader.readAsDataURL(file);
    },
    capitalizeFirstLetter(word) {
        return word.charAt(0).toUpperCase() + word.slice(1)
    },
    replaceDifferentValues(source, target) {
        let updatedObject = {};
        for (let prop in target)
            if (target.hasOwnProperty(prop))
                if (source.hasOwnProperty(prop))
                    if (source[prop] !== target[prop])
                        updatedObject[prop] = source[prop];
                    else
                        updatedObject[prop] = target[prop];
                else
                    updatedObject[prop] = target[prop];
        for (let prop in source)
            if (source.hasOwnProperty(prop) && !target.hasOwnProperty(prop))
                updatedObject[prop] = source[prop];
        return updatedObject;
    },
    areObjectsEqual(obj1, obj2) {
        // Récupérer les clés des deux objets
        const keys1 = Object.keys(obj1);
        const keys2 = Object.keys(obj2);

        // Vérifier si le nombre de clés est identique
        if (keys1.length !== keys2.length) {
            return false;
        }

        // Parcourir les clés de l'objet 1
        for (let key of keys1) {
            // Vérifier si la clé existe dans l'objet 2
            if (!obj2.hasOwnProperty(key)) {
                return false;
            }

            // Vérifier si les valeurs des propriétés sont différentes
            if (obj1[key] !== obj2[key]) {
                return false;
            }
        }

        // Les objets sont identiques
        return true;
    },
    isOnPhone() {
        return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
    }
};
export default Utils;