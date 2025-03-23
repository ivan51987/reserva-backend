const roleMiddleware = (requiredRole) => {
    return (req, res, next) => {
        if (req.user.role !== requiredRole) {
            return res.status(403).json({ error: 'No tienes permisos suficientes' });
        }
        next();
    };
};

module.exports = roleMiddleware;
