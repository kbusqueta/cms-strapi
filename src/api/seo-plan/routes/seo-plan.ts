export default {
    routes: [
        {
            method: 'GET',
            path: '/seo-plans',
            handler: 'seo-plan.find',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'GET',
            path: '/seo-plans/:id',
            handler: 'seo-plan.findOne',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'POST',
            path: '/seo-plans',
            handler: 'seo-plan.create',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'PUT',
            path: '/seo-plans/:id',
            handler: 'seo-plan.update',
            config: {
                policies: [],
                middlewares: [],
            },
        },
        {
            method: 'DELETE',
            path: '/seo-plans/:id',
            handler: 'seo-plan.delete',
            config: {
                policies: [],
                middlewares: [],
            },
        },
    ],
};
