class AddTextBoxToHomes < ActiveRecord::Migration[6.0]
  def change
    add_column :homes, :description, :text
  end
end
