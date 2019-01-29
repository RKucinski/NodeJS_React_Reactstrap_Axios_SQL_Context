const express = require('express');

const router = express.Router();
const connection = require('../auth/auth');

router.get('/list', (req, res) => {
  connection.query('SELECT * from films', (err, results) => {
    if (err) {
      res.status(500).send('Erreur dans la récup des films');
    } else {
      res.json(results);
    }
  });
});

router.post('/add', (req, res, next) => {
  const formData = req.body;
  const sql = 'INSERT INTO films SET ?';
  console.log(formData);
  connection.query(sql, formData, (err, results) => {
    if (err) {
      console.log(err);
      res.status(500).send("Erreur lors de la sauvegarde d'un film");
    } else {
      res.sendStatus(200);
    }
  });
});

// router.delete('/remove/:id', (req, res) => {
//   const idFilm = req.params.id;

//   connection.query('DELETE FROM films WHERE id = ?', [idFilm], (err) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la suppression d'un film");
//     } else {
//       res.sendStatus(200);
//     }
//   });
// });

// app.get('/formes/:id', (req, res) => {
//   const id = req.params.id;
//   const sql = `
//   SELECT
//   formes.id as id,
//   formes.position_X as X,
//   formes.position_Y as Y,
//   formes.size as formSize,
//   couleurs.name as couleur,
//   pattern.name as pattern,
//   file_name.name as file_name,
//   file_name.size as file_size
//   FROM formes
//   INNER JOIN couleurs ON formes.id_couleur = couleurs.id
//   INNER JOIN pattern ON formes.id_pattern = pattern.id
//   INNER JOIN file_name ON formes.id_fichier = file_name.id
//   WHERE formes.id_fichier = ?`;
//   const query = connection.query(sql, [id], (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur dans la récup des formes');
//     } else {
//       console.log(results);
//       res.json(results);
//     }
//   });
// });

// app.get('/patterns', (req, res) => {
//   const query = connection.query('SELECT * from pattern', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur dans la récup des patterns');
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/colors', (req, res) => {
//   const query = connection.query('SELECT * from couleurs', (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur dans la récup des couleurs');
//     } else {
//       res.json(results);
//     }
//   });
// });

// app.get('/file/:id', (req, res) => {
//   const id = req.params.id;
//   const sql = 'SELECT name from file_name WHERE id=?';
//   const query = connection.query(sql, [id], (err, results) => {
//     if (err) {
//       res.status(500).send('Erreur dans la récup des file');
//     } else {
//       console.log(results);
//       res.json(results);
//     }
//   });
// });

module.exports = router;
