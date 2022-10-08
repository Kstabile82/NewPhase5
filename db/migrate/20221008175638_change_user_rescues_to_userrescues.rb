class ChangeUserRescuesToUserrescues < ActiveRecord::Migration[6.1]
  def change
    rename_table :user_rescues, :userrescues

  end
end
