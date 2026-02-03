export default ({ env }) => ({
    // Enable Content-Type Builder in production
    // ⚠️ WARNING: This allows schema modifications in production
    // Only enable this if you need to modify content types
    // For better security, disable this after making changes
    'content-type-builder': {
        enabled: env.bool('ENABLE_CONTENT_TYPE_BUILDER', true),
    },
});
