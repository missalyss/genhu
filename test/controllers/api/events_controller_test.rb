require 'test_helper'

class Api::EventsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get api_events_index_url
    assert_response :success
  end

  test "should get edit" do
    get api_events_edit_url
    assert_response :success
  end

  test "should get show" do
    get api_events_show_url
    assert_response :success
  end

  test "should get update" do
    get api_events_update_url
    assert_response :success
  end

end
