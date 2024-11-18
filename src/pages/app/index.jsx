return (
    <Router>
      <Routes>
        {!user ? (
          <Route path="/" element={<Login onLogin={handleLogin} />} />
        ) : (
          <>
            <Route
              path="/dashboard"
              element={
                <Dashboard
                  user={user}
                  chamados={chamados}
                  onEdit={handleEditChamado}
                  onDelete={handleDeleteChamado}
                  onCreate={handleCreateChamado}
                />
              }
            />
            <Route
              path="/chamado"
              element={
                <ChamadoForm
                  user={user}
                  initialData={editingChamado}
                  onSubmit={handleSaveChamado}
                  onCancel={() => setEditingChamado(null)}
                />
              }
            />
          </>
        )}
      </Routes>
    </Router>
  );