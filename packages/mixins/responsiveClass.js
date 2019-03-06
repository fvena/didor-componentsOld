export default {
  props: {
    palm: { type: Object },
    lap: { type: Object },
    small: { type: Object },
    desk: { type: Object },
    large: { type: Object },
  },
  methods: {
    getResponsiveClass(baseClass, properties) {
      const breakpoints = ['palm', 'lap', 'small', 'desk', 'large'];
      const response = [];

      breakpoints.forEach((breakpoint) => {
        properties.forEach((property) => {
          if (this[breakpoint] && this[breakpoint][property]) {
            response.push(`${baseClass}--${breakpoint}--${property}-${this[breakpoint][property]}`);
          }
        });
      });

      return response;
    },
  },
};
