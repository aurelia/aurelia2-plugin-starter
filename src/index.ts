import { DI, IContainer, IRegistry } from '@aurelia/kernel';

const DefaultComponents: IRegistry[] = [
    // MyComponent as unknown as IRegistry,
];

function configure(container: IContainer, config?): IContainer {
    return container.register(...DefaultComponents)
}
export const PluginConfiguration = {
    register(container: IContainer): IContainer {
        return configure(container);
    },
    createContainer(): IContainer {
        return this.register(DI.createContainer());
    },
    customize(config?) {
        return {
            register(container: IContainer): IContainer {
                return configure(container, config);
            }
        }
    }
};