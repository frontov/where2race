const importAll = (r) => {
    let svgs = {};
    r.keys().forEach((item) => {
        svgs[item.replace('./', '').replace('.svg', '')] = r(item);
    });
    return svgs;
};

const svgs = importAll(require.context('./icons/', false, /\.svg$/));

export default svgs;