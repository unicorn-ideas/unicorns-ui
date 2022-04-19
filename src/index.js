import loadable from '@loadable/component';

export const Button = loadable(() => import('./components/Button'), {
  resolveComponent: (component) => component.default,
});

export const Theme = loadable(() => import('./components/Theme'), {
  resolveComponent: (component) => component.default,
});

export const Title = loadable(() => import('./components/Title'), {
  resolveComponent: (component) => component.default,
});
