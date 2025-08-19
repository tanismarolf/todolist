const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'chonjen2hack',
    database: 'todo_db',
});

db.connect(err => {
    if(err) {
        console.error('Erreur connexion MySQL:', err);
    } else {
        console.log('Connecté à MySQL');
    }
});

// récupérer les tâches 
app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err, results) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json(results);
    });
});

// modifier une tâche 
app.put('/tasks/:id', (req, res) => {
    const { title, description, deadline, completed } = req.body;
    const { id } = req.params;
    db.query('UPDATE tasks SET title=?, description=?, deadline=?, completed=? WHERE id=?',
        [title, description, deadline, completed, id],
        (err) => {
            if (err) return res.status(500).json({ error: err.message });
            res.json({ message: 'Tâche modifiée' });
        }
    );
});

// supprimer une tâche
app.delete('/tasks/:id', (req, res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id=?', [id], (err) => {
        if (err) return res.status(500).json({ error: err.message });
        res.json({ message: 'Tâche supprimée' });
    });
});

// démarrer le serveur
app.listen(3000, () => {
    console.log('Serveur API démarre sur http://localhost:3000');
});





/* const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password:'chonjen2hack',
    database:'todo_db',
});

db.connect(err => {
    if(err) {
        console.error('Erreur connexion MySQL:', err);
    } else {
        console.log('connecte a MySQL');
    }


});

// recuperer les taches 

app.get('/tasks', (req, res) => {
    db.query('SELECT * FROM tasks', (err,results) => {
        if (err) throw err;
        res.json(results);
    });
});

// modifier une tache 

app.put('/tasks/:id',(req, res) => {
    const {title, description, deadline, completed} = req.body;
    const { id } = req.params;
    db.query('UPDATE tasks SET title=?, description=?, deadline=?, completed=? WHERE id=?',
        [titel, description, deadline, completed, id],
        (err) => {
            if (err) throw err;
            res.json({ message: 'Tache modifier'});
        }
    );

});

// supprimer une tache

app.delete('/tasks/:id', (req,res) => {
    const { id } = req.params;
    db.query('DELETE FROM tasks WHERE id=?', [id], (err) => {
        if (err) throw err;
        res.json({ message: 'Tache supprimee'});
    });
});

// demarrer le serveur

app.listen(3000, () => {
    console.log('serveur API semarre sur http://localhost:3000');
});

*/

