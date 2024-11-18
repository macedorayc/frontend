import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './pages/login';
import Dashboard from './pages/dashboard';
import Chamado from './pages/chamado';


export default function AppRouter() {
  return (
    <BrowserRouter>
      <Routes>
      
        <Route path="/" element={<Login onLogin={handleLogin} />} />

        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              <Dashboard
                user={user}
                chamados={chamados}
                onEdit={handleEditChamado}
                onDelete={handleDeleteChamado}
                onCreate={handleCreateChamado}
              />
            </ProtectedRoute>
          }
        />
        <Route
          path="/chamado"
          element={
            <ProtectedRoute>
              <ChamadoForm
                user={user}
                initialData={editingChamado}
                onSubmit={handleSaveChamado}
                onCancel={() => setEditingChamado(null)}
              />
            </ProtectedRoute>
          }
        />

      </Routes>
    </BrowserRouter>
  );
}
