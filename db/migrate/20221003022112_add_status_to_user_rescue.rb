class AddStatusToUserRescue < ActiveRecord::Migration[6.1]
  def change
    add_column :user_rescues, :status, :string

  end
end
