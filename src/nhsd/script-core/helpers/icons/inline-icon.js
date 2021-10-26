import hexIcon from '@/helpers/icons/hexagonal-icon';

const icons = {};

const importAll = (requireContext) => requireContext.keys().forEach((requireKey) => {
    const key = requireKey.substr(0, requireKey.length - 4).substr(2);
    icons[key] = requireContext(requireKey);
});
importAll(require.context('../../../assets/icons', false, /\.svg$/));

export {
    icons,
};

export default function (id, nested = false) {
    if (nested) return hexIcon(icons[id]);
    return icons[id];
}
