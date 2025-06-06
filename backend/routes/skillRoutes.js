const express = require('express');
const router = express.Router();
const skillController = require('../controllers//skillController')
const { addComment, getComments, updateComment, deleteComment } = require('../controllers/commentController');
const { authenticate } = require('../middlewares/authMiddleware'); // <-- ton fichier

router.get('/', authenticate, skillController.getAllSkills);
router.get('/:id', skillController.getSkillById);


router.post('/', authenticate, skillController.createSkill);
router.patch('/:id', authenticate, skillController.updateSkill);
router.delete('/:id', authenticate, skillController.deleteSkill);

// Ajout des routes commentaires sur /skills/:id/comments
router.post('/:id/comments', authenticate, addComment);
router.get('/:id/comments', getComments);

// Routes pour modifier et supprimer les commentaires
router.patch('/comments/:id', authenticate, updateComment);
router.delete('/comments/:id', authenticate, deleteComment);

module.exports = router;